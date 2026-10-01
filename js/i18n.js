/* SDK Men's Spa: textos ES, servicios, packs reales y opiniones */
window.I18N = {
  dom: {
    es: {
      'nav.ritual': 'El ritual', 'nav.packs': 'Packs', 'nav.reviews': 'Opiniones', 'nav.visit': 'Visítanos',
      'cta.call': 'Reservar', 'cta.call2': 'Llamar', 'cta.build': 'Componer mi ritual', 'cta.route': 'Cómo llegar',
      'hero.title': 'El primer spa para hombres de Nador.',
      'hero.sub': 'Hammam, hijama, serviette de feu, tratamientos faciales, barbería y pedicura. Rituales para el cuerpo y la mente.',
      'rit.title': 'Un ritual, siete puertas.', 'rit.lead': 'Pasa de una lama a otra. Cada tratamiento se combina con los siguientes.',
      's1': 'Hammam', 's1.t': 'Clásico, Azzaro o SDK con head spa. Te dan vestuario, toalla y chanclas.',
      's2': 'Hijama', 's2.t': 'Ventosas secas o hijama con sangrado, por un especialista de la casa.',
      's3': 'Serviette de feu', 's3.t': 'El calor de una toalla pasada por la llama, sobre el cuerpo. En los packs Super y Premium.',
      's4': 'Masaje', 's4.t': 'Relajante de 30 minutos o con aceite de oud. «Fue tan bueno que me quedé dormido dos veces», cuenta un cliente.',
      's5': 'Rostro', 's5.t': 'HydraFacial y limpieza profunda para una piel limpia.',
      's6': 'Barbería', 's6.t': 'Corte, arreglo de barba y afeitado con los barberos de la casa.',
      's7': 'Pies y manos', 's7.t': 'Pedicura exprés, médica o bio, y manicura bio.',
      'b.title': 'Compón y te decimos qué pack.', 'b.lead': 'Toca los tratamientos que te apetecen. Se ilumina el pack que los reúne al mejor precio.',
      'b.note': 'Precios de los packs publicados por SDK Men’s Spa. Tratamientos sueltos: pregunta en recepción.',
      'rev.title': '«Me sentí como un rey.»', 'rev.score': 'en Google, 129 opiniones',
      'v.title': 'Hay Al Matar, detrás de la mezquita Mohamed VI.', 'v.h': 'Horario', 'v.h.v': 'Todos los días, de 10:00 a 00:00', 'v.t': 'Teléfono',
      'foot': 'Rituales de lujo para cuerpo y mente'
    }
  },
  services: [
    ['coupe', 'Coupe de cheveux', 'Corte de pelo', 'ph-scissors'],
    ['barbe', 'Taille de la barbe', 'Arreglo de barba', 'ph-scissors'],
    ['hammam', 'Hammam', 'Hammam', 'ph-thermometer-hot'],
    ['headspa', 'Head spa', 'Head spa', 'ph-flower-lotus'],
    ['massage', 'Massage 30 min', 'Masaje 30 min', 'ph-hand-palm'],
    ['serviette', 'Serviette de feu', 'Serviette de feu', 'ph-flame'],
    ['hijama', 'Hijama', 'Hijama', 'ph-drop'],
    ['visage', 'Soin du visage', 'Tratamiento facial', 'ph-sparkle'],
    ['pedicure', 'Pédicure', 'Pedicura', 'ph-footprints'],
    ['manucure', 'Manucure', 'Manicura', 'ph-hand'],
    ['mouska', 'Mouska', 'Mouska', 'ph-leaf']
  ],
  packs: [
    { id: 'fresh', name: ['Pack <span>Fresh</span> Look', 'Pack <span>Fresh</span> Look'], price: 790, old: 900,
      items: [[['coupe', 'barbe'], 'Coupe de cheveux + taille de la barbe', 'Corte de pelo + arreglo de barba'], [['hammam'], 'Hammam classique', 'Hammam clásico'], [['massage'], 'Massage relaxant (30 minutes)', 'Masaje relajante (30 minutos)'], [['pedicure'], 'Pédicure express', 'Pedicura exprés'], [['visage'], 'Soin profond', 'Limpieza profunda']] },
    { id: 'super', name: ['Pack <span>Super</span> Look', 'Pack <span>Super</span> Look'], price: 1480, old: 1600,
      items: [[['coupe', 'barbe'], 'Coupe de cheveux + taille de la barbe', 'Corte de pelo + arreglo de barba'], [['hammam'], 'Hammam Azzaro', 'Hammam Azzaro'], [['pedicure'], 'Pédicure médicale', 'Pedicura médica'], [['serviette'], 'La serviette de feu', 'La serviette de feu'], [['hijama'], 'Hijama sèche (ventouses sèches)', 'Hijama seca (ventosas secas)'], [['visage'], 'HydraFacial', 'HydraFacial']] },
    { id: 'premium', name: ['Pack <span>Premium</span> Look', 'Pack <span>Premium</span> Look'], price: 2099, old: 2280,
      items: [[['coupe', 'barbe'], 'Coupe de cheveux + taille de la barbe', 'Corte de pelo + arreglo de barba'], [['hammam', 'headspa'], 'Hammam SDK avec head spa', 'Hammam SDK con head spa'], [['pedicure', 'manucure'], 'Pédicure bio + manucure bio', 'Pedicura bio + manicura bio'], [['serviette'], 'La serviette de feu', 'La serviette de feu'], [['hijama'], 'Hijama sanguine ou hijama sèche', 'Hijama con sangrado o seca'], [['mouska'], 'Mouska', 'Mouska'], [['visage'], 'HydraFacial', 'HydraFacial']] }
  ],
  ui: {
    fr: { save: 'économie', none: 'Touchez au moins un soin.', all: '{p} réunit tout : {n} DH au lieu de {o}, soit {s} DH d’économie.', part: 'Aucun pack ne réunit tout. {p} en couvre {c} sur {t} ; le reste se prend à la carte.', book: 'Réserver ce pack' },
    es: { save: 'de ahorro', none: 'Toca al menos un tratamiento.', all: 'El {p} lo reúne todo: {n} DH en lugar de {o}, {s} DH de ahorro.', part: 'Ningún pack lo reúne todo. El {p} cubre {c} de {t}; el resto, a la carta.', book: 'Reservar este pack' }
  },
  reviews: {
    fr: [
      ['J’ai commencé par une coupe et une taille de barbe impeccables, puis un hammam suivi d’un massage à l’huile de oud absolument incroyable, très relaxant.', 'Younes Douni'],
      ['J’ai été reçu de façon excellente, le personnel était très respectueux et aimable, et je suis ressorti détendu, comme neuf. J’ai pris le pack complet : coupe, spa et pédicure. 10/10 !', 'Arias Bergen'],
      ['Excellent spa, hammam classique traditionnel, toute l’équipe très aimable. On vous fournit vestiaire, serviette et sandales.', 'Walid Lamkaraf Boudhan']
    ],
    es: [
      ['Comencé con un corte de pelo y un arreglo de barba impecables. Después, disfruté de un hammam seguido de un masaje de oud absolutamente increíble, muy relajante.', 'Younes Douni'],
      ['Recibí un trato excelente; el personal fue muy respetuoso y amable, y salí relajado y sintiéndome como nuevo. Elegí el paquete completo: corte de pelo, spa y pedicura. ¡Un 10/10!', 'Arias Bergen'],
      ['Excelente Spa, Hammam Classic tradicional, el equipo completo muy amable. Servicio magnífico, te facilitan vestuario, toalla, chanclas.', 'Walid Lamkaraf Boudhan']
    ]
  }
};
