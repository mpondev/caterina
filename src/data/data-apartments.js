import { supabaseUrl } from '../services/supabase';

const imageUrl = `${supabaseUrl}/storage/v1/object/public/apartment-images/`;

export const apartments = [
  {
    apartment: '001',
    max_capacity: 2,
    regular_price: 250,
    discount: 0,
    image: imageUrl + 'apartment-001.webp',
    description:
      'Descubra la mejor escapada de lujo para parejas en el acogedor apartamento 001. Ubicado en un pintoresco ático, este impresionante apartamento ofrece un retiro íntimo y apartado. En el interior, disfrute de modernos interiores de alta calidad, una cómoda zona de estar, una chimenea y una cocina totalmente equipada. La lujosa cama tamaño king, con finas sábanas de seda, garantiza un sueño reparador. Relájese en la ducha tipo spa y descanse en la terraza privada con bañera de hidromasaje.',
  },
  {
    apartment: '002',
    max_capacity: 2,
    regular_price: 350,
    discount: 25,
    image: imageUrl + 'apartment-002.webp',
    description:
      'Visite Valencia y disfrute del lujo en nuestro acogedor apartamento 002. Perfecto para familias, este apartamento ofrece un retiro íntimo y apartado en el corazón del centro de la ciudad. En el interior encontrará interiores cálidos y acogedores de alta calidad, una cómoda sala de estar, tres grandes habitaciones y una cocina totalmente equipada. El lujoso dormitorio de matrimonio cuenta con una lujosa cama tamaño king y una ducha tipo spa. Relájese en la terraza privada con jacuzzi y disfrute de la belleza de sus vistas.',
  },
  {
    apartment: '003',
    max_capacity: 4,
    regular_price: 300,
    discount: 0,
    image: imageUrl + 'apartment-003.webp',
    description:
      'Experimente una vida familiar de lujo en nuestro apartamento de tamaño mediano 003. Perfecto para familias de hasta 4 personas, este apartamento ofrece un espacio cómodo y acogedor con todas las comodidades modernas. En el interior encontrará interiores cálidos y acogedores de alta calidad, una cómoda sala de estar y una cocina totalmente equipada. Las habitaciones cuentan con lujosas camas y baños. El apartamento tiene una terraza privada, perfecta para disfrutar del clima de la ciudad.',
  },
  {
    apartment: '004',
    max_capacity: 4,
    regular_price: 500,
    discount: 50,
    image: imageUrl + 'apartment-004.webp',
    description:
      'Disfrute de las mejores vacaciones familiares de lujo en este apartamento 004 de tamaño mediano. Diseñado para familias de hasta 4 personas, este apartamento ofrece un suntuoso refugio para el viajero exigente. En el interior, el apartamento cuenta con interiores opulentos de la mejor calidad, una cómoda sala de estar y una cocina gourmet totalmente equipada. Las habitaciones están adornadas con lujosas camas y baños en suite. Salga a su terraza privada y sumérjase en el entorno.',
  },
  {
    apartment: '005',
    max_capacity: 6,
    regular_price: 350,
    discount: 0,
    image: imageUrl + 'apartment-005.webp',
    description:
      'Disfrute de una escapada cómoda y acogedora con su grupo o familia en nuestro espacioso apartamento 005. Diseñado para alojar hasta 6 personas, este apartamento ofrece un retiro aislado en el corazón de la ciudad. En el interior, el apartamento presenta interiores cálidos y acogedores, una sala de estar con chimenea y una cocina totalmente equipada. Las habitaciones son cómodas y están equipadas con cuartos de baño privados. Salga a su terraza privada y disfrute del clima mediterráneo de la ciudad.',
  },
  {
    apartment: '006',
    max_capacity: 6,
    regular_price: 700,
    discount: 100,
    image: imageUrl + 'apartment-006.webp',
    description:
      'Experimente el máximo lujo con su grupo o familia en nuestro espacioso apartamento 006. Diseñado para alojar cómodamente hasta 6 personas, este apartamento ofrece un lujoso refugio en el corazón de la ciudad. En el interior, el apartamento cuenta con interiores opulentos de primera calidad, una gran sala de estar con chimenea y una cocina gourmet totalmente equipada. Las habitaciones están adornadas con lujosas camas y baños en suite tipo spa.',
  },
  {
    apartment: '007',
    max_capacity: 8,
    regular_price: 650,
    discount: 25,
    image: imageUrl + 'apartment-007.webp',
    description:
      'Aloje a su grupo grande o a varias familias en el espacioso y grandioso apartamento 007. Diseñado para alojar cómodamente hasta 8 personas, este apartamento ofrece un refugio aislado en el corazón de la ciudad. En el interior, el apartamento cuenta con interiores cálidos y acogedores múltiples salas de estar y una cocina totalmente equipada. Las habitaciones son cómodas y están equipadas con cuartos de baño privados. El apartamento tiene una terraza privada con bañera de hidromasaje y zona para sentarse al aire libre, perfecta para disfrutar del clima.',
  },
  {
    apartment: '008',
    max_capacity: 10,
    regular_price: 1400,
    discount: 200,
    image: imageUrl + 'apartment-008.webp',
    description:
      'Experimente el epítome del lujo con su grupo grande o varias familias en nuestro gran apartamento 008. Este apartamento ofrece un lujoso refugio que satisfará todas sus necesidades y deseos. El apartamento presenta un diseño opulento y cuenta con acabados de alta gama, detalles intrincados y madera de la mejor calidad. En el interior, el apartamento cuenta con múltiples grandes salas de estar, un comedor formal y una cocina gourmet que es el sueño de un chef. Las habitaciones están diseñadas para ofrecer el máximo confort y lujo, con lujosas camas y baños privados estilo spa. Salga y sumérjase en la belleza de las vistas de la ciudad desde su terraza privada, que cuenta con amplias áreas para sentarse para disfrutar y relajarse al máximo.',
  },
];
