// logos
import logo1 from "../assets/logos/LogoYare.webp";
import logoDafne from "../assets/logos/logoDafne.png";
import logoAida from "../assets/logos/logoAida.webp";
import logoAlejandra from "../assets/logos/logoAlejandra.webp";
import logoDenisse from "../assets/logos/logoDenisse.webp";
import logoErika from "../assets/logos/logoErika.webp";
import logoKarlaVadillo from "../assets/logos/logoKarlaVadillo.webp";
import logoMarisol from "../assets/logos/logoMarisol.webp";
import logoNohemi from "../assets/logos/logoNohemi.webp";
import logoSagrario from "../assets/logos/logoSagrario.webp";
import logoSilvia from "../assets/logos/logoSilvia.webp";
import logoZamira from "../assets/logos/logoZamira.webp";
import logoJudit from "../assets/logos/img6.webp";
import logoAnahi from "../assets/logos/img7.webp";
import logoSusi from "../assets/logos/img8.webp";
import logoFavi from "../assets/logos/img9.webp";
import logoMariana from "../assets/logos/img10.webp";
import logoLiliana from "../assets/logos/img11.webp";
import logoDanarely from "../assets/logos/logoDanarely.webp";
import logoKarlaMartinez from "../assets/logos/img13.webp";
import logoJarenssi from "../assets/logos/img14.webp";
import logoSandra from "../assets/logos/img15.webp";
import logoMirna from "../assets/logos/img18.webp";
import logoAmway from "../assets/logos/img22.webp";
import logoMiNino from "../assets/logos/img23.webp";
import logoLoveJuvenil from "../assets/logos/img24.webp";
import logoJade from "../assets/logos/img25.webp";

//Imported images
import sagrario from "../assets/img1.webp";
import zami from "../assets/img2.webp";
import yare from "../assets/img3.webp";
import ale from "../assets/img4.webp";
import nohemi from "../assets/img4-1.webp";
import aida from "../assets/img4-2.webp";
import mirna from "../assets/img4-3.webp";
import silvia from "../assets/img4-4.webp";
import erika from "../assets/img4-6.webp";
import dafne from "../assets/img4-7.webp";
import marisol from "../assets/img4-8.webp";
import denisse from "../assets/img4-9.webp";
import vadillo from "../assets/img4-11.webp";
import mery from "../assets/img6.webp";
import mazunte from "../assets/img7.webp";
import nemas from "../assets/img8.webp";
import shelo from "../assets/img11.webp";
import danarely from "../assets/logos/img12.webp";
import meryKay from "../assets/img15.webp";

// Lets create an array that is gonna contain all destination data an we loop through
const data = [
    {
        id: 1,
        img: sagrario,
        logo: logoSagrario,
        name: "Sagrario Aguilar Calderón",
        description: "Dentista",
        paragraph:
            "¿Quieres una sonrisa perfecta? Ven a nuestro consultorio dental y disfruta de nuestros servicios profesionales, personalizados y accesibles. Tu salud bucal es nuestra prioridad.",
        category: "Servicio",
        productos: ["Ortodoncias", "Blanqueamiento", "Muelas del juicio"],
        phone: 2381647851,
        info: [
            "céd. 10554490",
            "Benemérita Universidad Autónoma de Puebla",
            "9 años de experiencia",
        ],
    },
    {
        id: 2,
        img: zami,
        logo: logoZamira,
        name: "Lft Zamira Carrera Rodríguez",
        description: "Fisioterapeuta",
        paragraph:
            "¿Sufres de dolor muscular o articular? Te ofrecemos un servicio de fisioterapia profesional, eficaz y personalizado. Recupera tu movilidad y bienestar con nosotros.",
        category: "Servicio",
        productos: ["Deportiva", "Cardiopulmonar", "Pediátrica"],
        phone: 2382504698,
        info: [
            "céd. 12236109",
            "Universidad del Valle de Puebla campus Tehuacán",
            "5 años de experiencia",
        ],
    },
    {
        id: 3,
        img: yare,
        logo: logo1,
        name: "Lnc Yarenci Menchaca",
        description: "Nutrióloga",
        paragraph:
            "¿Quieres mejorar tu alimentación y salud? Te ayudamos a diseñar un plan nutricional adaptado a tus necesidades y objetivos. Servicio de Nutrióloga profesional y cercano.",
        category: "Servicio",
        productos: [
            "Sobrepeso",
            "Aumento de masa muscular",
            "Nutrición clínica",
        ],
        phone: 2381657677,
        info: [
            "céd. 13117076",
            "Benemerita Universidad Autonoma de Puebla",
            "3 años de experiencia",
        ],
    },
    {
        id: 4,
        img: ale,
        logo: logoAlejandra,
        name: "Alejandra Amieva Olguín",
        description: "Belleza y Maquillaje",
        paragraph:
            "¿Quieres sentirte más bella y radiante? Te invitamos a nuestro servicio de Belleza, donde te ofrecemos maquillaje, peinado, manicura y pedicura de calidad.",
        category: "Servicio",
        productos: ["Estilismo", "Tintes", "Uñas"],
        phone: 2381681043,
        info: ["U.T.B.E  Campus Estado de Mexico", "15 años de experiencia"],
    },
    {
        id: 5,
        img: nohemi,
        logo: logoNohemi,
        name: "Lic Nohemi Nava García",
        description: "Psicóloga",
        paragraph:
            "¿Necesitas apoyo emocional y profesional? Te ofrecemos un servicio de Psicología, donde te escuchamos, orientamos y acompañamos en tu proceso de crecimiento personal.",
        category: "Servicio",
        productos: [
            "Psicoterapia individual",
            "Psicoterapia familiar",
            "Psicoterapia infantil",
        ],
        phone: 2381305015,
        info: [
            "céd. 3506123",
            "Benemérita Universidad Autónoma de Puebla",
            "26 años de experiencia",
        ],
    },
    {
        id: 6,
        img: aida,
        logo: logoAida,
        name: "Aida Cancino",
        description: "Health Coach",
        paragraph:
            "¿Quieres relajar tu cuerpo y mente? Prueba nuestro servicio de Yoga Vinyasa, donde te enseñamos a sincronizar tu respiración y movimiento. Yoga Vinyasa para todos.",
        category: "Servicio",
        productos: ["Yoga", "Martes, Jueves y Viernes", "8am-9am"],
        phone: 2383822439,
        info: [],
    },
    {
        id: 7,
        img: mirna,
        logo: logoMirna,
        name: "Mirna Maron",
        description: "Coach Workout",
        paragraph:
            "¿Quieres ponerte en forma y divertirte? Te ofrecemos un servicio de Ejercicios de Workout, donde te retamos a superar tus límites. Workout para todos los niveles.",
        category: "Servicio",
        productos: ["Ejercicios funcionales", "Lun., Mar., Mie. y Jue."],
        phone: 2382031348,
        info: [],
    },
    {
        id: 9,
        img: silvia,
        logo: logoSilvia,
        name: "Lic Silvia Lezama Surroca",
        description: "Psicóloga",
        paragraph:
            "Mejora tu bienestar emocional con nuestro servicio de Psicología. Te brindamos escucha, orientación y acompañamiento profesional.",
        category: "Servicio",
        productos: [
            "Psicoterapia individual",
            "Psicoterapia familiar",
            "Psicoterapia infantil",
        ],
        phone: 2381273712,
        info: ["céd. 13832278", "Froebel Universidad", "6 años de experiencia"],
    },
    {
        id: 10,
        img: dafne,
        logo: logoDafne,
        name: "Dafne León",
        description: "Cosmetóloga Cosmiatra",
        paragraph:
            "Cuida tu piel con nuestro servicio de Cosmetólogia. Te ofrecemos tratamientos faciales y corporales personalizados y efectivos. Piel sana y bella.",
        category: "Servicio",
        productos: ["Masajes", "Faciales", "Depilaciones"],
        phone: 5579449235,
        info: [
            "céd. 7578167",
            "El Aspidpro condesa incorporada a la UNAM",
            "10 años de experoencia",
        ],
    },
    {
        id: 11,
        img: marisol,
        logo: logoMarisol,
        name: "Lft Marisol Rodriguez",
        description: "Fisioterapeuta",
        paragraph:
            "Recupera tu salud y funcionalidad con nuestra fisioterapeuta. Te ofrecemos una atención personalizada, profesional y eficiente. Fisioterapia adaptada a tus necesidades.",
        category: "Servicio",
        productos: ["Hidrolipoclasia", "Dermapen", "Faciales"],
        phone: 2381784136,
        info: [],
    },
    {
        id: 12,
        img: erika,
        logo: logoErika,
        name: "Erika Espinosa",
        description: "Nail Artist",
        paragraph:
            "Transforma tus uñas con nuestra Nail Artist. Te ofrecemos diseños originales, creativos y de calidad. Nail Artist para todos los gustos.",
        category: "Servicio",
        productos: ["Esmaltado", "Kapping Gel", "Acrílico"],
        phone: 2381784136,
        info: [],
    },
    {
        id: 13,
        img: denisse,
        logo: logoDenisse,
        name: "Denise Mariel Velasco Fuentes",
        description: "Terapias Flores Bach",
        paragraph:
            "Armoniza tu cuerpo, mente y espíritu con nuestro servicio de Terapias Flores Bach. Te ofrecemos una terapia natural, personalizada y efectiva. Terapias Flores Bach para ti.",
        category: "Servicio",
        productos: [
            "Sesión de Barras",
            "Liberación Emocional",
            "Biomagnetismo",
        ],
        phone: 2382030351,
        info: [],
    },
    {
        id: 15,
        img: vadillo,
        logo: logoKarlaVadillo,
        name: "Karla Vadillo",
        description: "Aromaterapia",
        paragraph:
            "Disfruta de los beneficios de los aceites esenciales con nuestro servicio de Aromaterapia. Te ofrecemos una experiencia relajante, sanadora y personalizada. Aromaterapia para tu bienestar.",
        category: "Servicio",
        productos: ["Masajes Aromatouch"],
        phone: 2383940765,
        info: [],
    },
    {
        id: 24,
        img: danarely,
        logo: logoDanarely,
        name: "Danarely García Zarate",
        description: "Nutrióloga",
        paragraph:
            "¿Te gustaría cuidar tu salud con una alimentación adecuada? Nuestro servicio de nutrición clínica te ofrece una atención personalizada y profesional, con planes de alimentación adaptados a tus necesidades y objetivos. ¡No esperes más y pide tu cita!",
        category: "Servicio",
        productos: ["Nutrición clinina"],
        phone: 2381548776,
        info: [
            "céd. 13950112",
            "Benemerita Universidad Autónoma de puebla",
            "2 años de experiencia",
        ],
    },
    {
        id: 18,
        img: mery,
        logo: logoJudit,
        name: "Judith Ruth Peralta",
        description: "Méry",
        paragraph:
            "Encuentra los mejores productos de ropa, perfumes y calzado en nuestra tienda. Te ofrecemos calidad, variedad y buen precio. Viste y huele bien con nosotros.",
        category: "Producto",
        productos: ["Ropa", "Perfumes y Accesorios", "Calzado"],
        phone: 2371088520,
        info: [],
    },
    {
        id: 19,
        img: mazunte,
        logo: logoAnahi,
        name: "Anahí Mateo Armas",
        description: "Mazunte",
        paragraph:
            "Cuida tu piel y cabello con nuestros productos de jabones, shampoos y cremas. Te ofrecemos productos naturales, efectivos y aromáticos. Belleza y salud natural.",
        category: "Producto",
        productos: ["Jabones", "Shampoo", "Cremas y Geles"],
        phone: 2381720268,
        info: [],
    },
    {
        id: 20,
        img: nemas,
        logo: logoSusi,
        name: "Susana Carrillo | Emmanuel Flores",
        description: "Nema's Tehuacán",
        paragraph:
            "Luce accesorios de calidad con nuestros productos de bolsos de cuero, carteras y cinturones. Te ofrecemos diseño, elegancia y durabilidad. Accesorios para todos los estilos.",
        category: "Producto",
        productos: ["Bolsos", "Carteras", "Cinturones"],
        phone: 2381191443,
        info: [],
    },
    {
        id: 21,
        img: shelo,
        logo: logoLiliana,
        name: "Liliana Nieto Morales",
        description: "Shelo Nabel",
        paragraph:
            "Shelo Nabel te ofrece productos naturales para tu salud y belleza. Conoce sus beneficios y promociones. Shelo Nabel, por ti y para ti.",
        category: "Producto",
        productos: ["Cremas", "Shampoo", "Maquillaje"],
        phone: 2381281696,
        info: [],
    },
    {
        id: 22,
        img: "https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/img9.webp?alt=media&token=9adf5b8c-2b49-4ffb-a8f0-fba55b3b630f",
        logo: logoFavi,
        name: "Faviola Peralta Carrasco",
        description: "Manualidades Pasta Flexible",
        paragraph:
            "Crea y decora con nuestros productos de manualidades con pasta flexible. Te ofrecemos pasta de colores, moldes, herramientas y más. Manualidades divertidas y fáciles.",
        category: "Producto",
        productos: ["Llaveros", "Velas", "Tazas"],
        phone: 2381329022,
        info: [],
    },
    {
        id: 23,
        img: "https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/img10.webp?alt=media&token=2ccbbd55-6be0-408b-8510-9be65ce0ee97",
        logo: logoMariana,
        name: "Mariana Toscano Flores",
        description: "JOYERÍA Y ACCESORIOS",
        paragraph:
            "Luce hermosa y elegante con nuestros productos de Joyeria. Te ofrecemos joyas de oro, plata, piedras y más. Joyeria para todos los gustos y ocasiones.",
        category: "Producto",
        productos: ["Collares", "Pulseras", "LLamadores de ángeles"],
        phone: 2381211695,
        info: [],
    },
    {
        id: 25,
        img: "https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/img13.webp?alt=media&token=a9fb321d-c247-4afd-99fd-f3f753167f18",
        logo: logoKarlaMartinez,
        name: "Karla Martínez",
        description: "Joyería y Accesorios",
        paragraph:
            "Luce hermosa y elegante con nuestros productos de Joyeria. Te ofrecemos joyas de oro, plata, piedras y más. Joyeria para todos los gustos y ocasiones.",
        category: "Producto",
        productos: ["Relojes", "Joyería", "Bolsos"],
        phone: 2383940765,
        info: [],
    },
    {
        id: 26,
        img: "https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/img14.webp?alt=media&token=adf8dda0-2cb2-455e-bddd-5d607fb6baad",
        logo: logoJarenssi,
        name: "Jarenssi Bibiano",
        description: "Productos Infantiles",
        paragraph:
            "Estimula el aprendizaje de tus hijos con nuestros productos Didacticos para niños. Te ofrecemos juegos, libros, puzzles y más. Materiales didacticos divertidos y educativos.",
        category: "Producto",
        productos: ["Juguetes Didacticos", "Libros Didacticos"],
        phone: 2381315970,
        info: [],
    },
    {
        id: 27,
        img: meryKay,
        logo: logoSandra,
        name: "Sandra García Mendoza",
        description: "Mary Kay & Betterware",
        paragraph:
            "Ofrecemos productos de belleza Mary Kay y artículos del hogar Betterware. Calidad y satisfacción garantizadas para embellecer tu vida y tu hogar con estilo y funcionalidad.",
        category: "Producto",
        productos: ["Productos Betterware", "Productos Mary Kay"],
        phone: 2381703590,
        info: [],
    },
    {
        id: 28,
        img: logoAmway,
        logo: logoAmway,
        name: "Marina Alvarez Ramales",
        description: "Productos Naturales",
        paragraph:
            "Productos de calidad para una vida en balance. Nutrición, belleza, cuidado personal y del hogar. Emprende tu propio negocio con Amway y vive mejor.",
        category: "Producto",
        productos: ["Higiene Personal", "Suplementos", "Skyncare"],
        phone: 2381184110,
        info: [],
    },
    {
        id: 29,
        img: logoMiNino,
        logo: logoMiNino,
        name: "Yatzelin Abigail Figueroa Ortiz",
        description: "Productos Infantiles",
        paragraph:
            "Ofrecemos trajes y vestidos elegantes para niños, perfectos para cualquier ocasión especial. Calidad, estilo y comodidad garantizados para que los pequeños luzcan impecables y se sientan únicos.",
        category: "Producto",
        productos: ["Vestidos para niñas", "Trajes para niños"],
        phone: 2381403331,
        info: [],
    },
    {
        id: 30,
        img: logoLoveJuvenil,
        logo: logoLoveJuvenil,
        name: "Martha Navarrete Cruz",
        description: "Productos Infantiles",
        paragraph:
            "Ofrecemos una amplia gama de productos para niños, desde juguetes educativos hasta ropa cómoda y moderna. Calidad y diversión aseguradas para los más pequeños.",
        category: "Producto",
        productos: ["Zandalias", "Pantuflas", "Cojines"],
        phone: 2382075082,
        info: [],
    },
    {
        id: 31,
        img: logoJade,
        logo: logoJade,
        name: "Gabriela Cabrera Fernandez",
        description: "Accesorios Importados",
        paragraph:
            "Descubre bolsos de uso diario y accesorios de importación. Combinamos funcionalidad y estilo para ofrecerte piezas únicas que complementan tu vida cotidiana con elegancia.",
        category: "Producto",
        productos: ["Bolsos", "Calzado", "Utensilios"],
        phone: 2383932179,
        info: [],
    },
];
export default data;
