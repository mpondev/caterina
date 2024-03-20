import supabase from './supabase';

export async function getApartments() {
  const { data, error } = await supabase.from('apartments').select('*');

  if (error) {
    console.error(error);
    throw new Error('Los apartamentos no se han podido cargar');
  }

  return data;
}

export async function createApartment(newApartment) {
  const { data, error } = await supabase
    .from('apartments')
    .insert([newApartment])
    .select();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error('El apartamento no se ha podido crear');
  }
}

export async function deleteApartment(id) {
  const { error } = await supabase.from('apartments').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('El apartamento no se ha podido borrar');
  }
}
