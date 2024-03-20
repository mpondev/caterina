import { useForm } from 'react-hook-form';

import './CreateApartmentForm.scss';

function CreateApartmentForm() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
        <label htmlFor="apartment">Apartamento</label>
        <input type="text" id="apartment" {...register('apartment')} />
      </div>

      <div className="formRow">
        <label htmlFor="max_capacity">Capacidad Máxima</label>
        <input type="number" id="max_capacity" {...register('max_capacity')} />
      </div>

      <div className="formRow">
        <label htmlFor="regular_price">Precio</label>
        <input
          type="number"
          id="regular_price"
          {...register('regular_price')}
        />
      </div>

      <div className="formRow">
        <label htmlFor="discount">Descuento</label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount')}
        />
      </div>

      <div className="formRow">
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          defaultValue=""
          {...register('description')}
        ></textarea>
      </div>

      <div className="formRow">
        <label htmlFor="image">Imagen</label>
        <input type="text" id="image" {...register('image')} />
      </div>

      <div className="formRow">
        <button type="reset" className="btn btn--cancel">
          Cancelar
        </button>
        <button className="btn">Añadir</button>
      </div>
    </form>
  );
}

export default CreateApartmentForm;
