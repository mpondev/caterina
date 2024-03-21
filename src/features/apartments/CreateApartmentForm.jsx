import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { useCreateApartment } from './useCreateApartment';
import { useEditApartment } from './useEditApartment';
import FormRow from '../../ui/FormRow';

import './CreateApartmentForm.scss';

function CreateApartmentForm({ apartmentToEdit = {} }) {
  const { createApartment, isCreating } = useCreateApartment();
  const { editApartment, isEditing } = useEditApartment();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = apartmentToEdit;
  const isEditSession = Boolean(editId);
  const { formState, getValues, handleSubmit, register, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editApartment(
        { newApartmentData: { ...data, image }, id: editId },
        {
          onSuccess: () => reset(),
        }
      );
    else
      createApartment(
        { ...data, image: image },
        {
          onSuccess: () => reset(),
        }
      );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Apartamento" error={errors?.apartment?.message}>
        <input
          type="text"
          id="apartment"
          disabled={isWorking}
          {...register('apartment', {
            required: 'Este campo es obligatorio',
          })}
        />
      </FormRow>

      <FormRow label="Capacidad Máxima" error={errors?.max_capacity?.message}>
        <input
          type="number"
          id="max_capacity"
          disabled={isWorking}
          {...register('max_capacity', {
            required: 'Este campo es obligatorio',
            min: {
              value: 1,
              message: 'La capacidad debe ser mayor que 0',
            },
          })}
        />
      </FormRow>

      <FormRow label="Precio" error={errors?.regular_price?.message}>
        <input
          type="number"
          id="regular_price"
          disabled={isWorking}
          {...register('regular_price', {
            required: 'Este campo es obligatorio',
            min: {
              value: 1,
              message: 'El precio debe ser mayor que 0',
            },
          })}
        />
      </FormRow>

      <FormRow label="Descuento" error={errors?.discount?.message}>
        <input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'Este campo es obligatorio',
            validate: value =>
              value <= getValues().regular_price ||
              'El descuento debe ser inferior al precio',
          })}
        />
      </FormRow>

      <FormRow label="Descripción" error={errors?.description?.message}>
        <textarea
          name="description"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register('description')}
        ></textarea>
      </FormRow>

      <FormRow label="Imagen" error={errors?.image?.message}>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="img-input"
          {...register('image', {
            required: isEditSession ? false : 'Este campo es obligatorio',
          })}
        />
      </FormRow>

      <div className="formRow">
        <button type="reset" className="btn btn--cancel">
          Cancelar
        </button>
        <button className="btn" disabled={isWorking}>
          {isEditSession ? 'Editar' : 'Añadir'}
        </button>
      </div>
    </form>
  );
}

CreateApartmentForm.propTypes = {
  apartmentToEdit: PropTypes.object,
};

export default CreateApartmentForm;
