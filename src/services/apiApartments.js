import supabase, { supabaseUrl } from './supabase';

export async function getApartments() {
  const { data, error } = await supabase.from('apartments').select('*');

  if (error) {
    console.error(error);
    throw new Error('Los apartamentos no se han podido cargar');
  }

  return data;
}

export async function createEditApartment(id, newApartment) {
  const hasImagePath = newApartment.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newApartment.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newApartment.image
    : `${supabaseUrl}/storage/v1/object/public/apartment-images/${imageName}`;

  // Create/Edit apartment
  let query = supabase.from('apartments');

  // Create:
  if (!id) query = query.insert([{ ...newApartment, image: imagePath }]);

  // Edit:
  if (id)
    query = query.update({ ...newApartment, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('El apartamento no se ha podido crear');
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from('apartment-images')
    .upload(imageName, newApartment.image);

  // Delete the apartment IF there was an error uploading the image
  if (storageError) {
    await supabase.from('apartments').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'La imagen del apartamento no se ha podido subir; el apartamento no ha sido creado'
    );
  }

  return data;
}

export async function deleteApartment(id) {
  const { error } = await supabase.from('apartments').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('El apartamento no se ha podido borrar');
  }
}
