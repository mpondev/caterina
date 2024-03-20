import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { createApartment } from '../../services/apiApartments';
import FormRow from '../../ui/FormRow';

import './CreateApartmentForm.scss';

function CreateApartmentForm() {
  const { formState, getValues, handleSubmit, register, reset } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createApartment,
    onSuccess: () => {
      toast.success('Apartamento creado con éxito');
      queryClient.invalidateQueries({ queryKey: ['apartments'] });
      reset();
    },
    onError: err => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Apartamento" error={errors?.apartment?.message}>
        <input
          type="text"
          id="apartment"
          disabled={isCreating}
          {...register('apartment', {
            required: 'Este campo es obligatorio',
          })}
        />
      </FormRow>

      <FormRow label="Capacidad Máxima" error={errors?.max_capacity?.message}>
        <input
          type="number"
          id="max_capacity"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          defaultValue=""
          {...register('description')}
        ></textarea>
      </FormRow>

      <FormRow label="Imagen" error={errors?.image?.message}>
        <input type="text" id="image" accept="image/*" {...register('image')} />
      </FormRow>

      <div className="formRow">
        <button type="reset" className="btn btn--cancel">
          Cancelar
        </button>
        <button className="btn" disabled={isCreating}>
          Añadir
        </button>
      </div>
    </form>
  );
}

export default CreateApartmentForm;
