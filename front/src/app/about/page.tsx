"use client";


const page = () => {
    return(
        <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}

      <section className="relative container mx-auto h-[500] flex justify-center text-start text-white">

        <div className="container mx-auto px-10 mt-8 absolute inset-0 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('https://blog.underc0de.org/wp-content/uploads/2022/03/september2021__f5zmksnt6cuq_og.jpg')" }}>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-7">Sobre Nosotros</h1>
            <p className="text-xl text-white">Innovando para un futuro mejor</p>
          </div>
        </div>

      </section>

      {/* Company Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 mb-8">
              En MI TIENDA, nos dedicamos a transformar ideas en soluciones tecnológicas 
              que mejoran la vida de las personas y impulsan el progreso de las empresas. 
              Creemos en el poder de la innovación para crear un futuro más brillante y sostenible.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">10+</h3>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-600">Proyectos completados</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-600">Expertos en tecnología</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
  <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo Directivo</h2>
  
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Miembro del equipo */}
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-bold mb-4">Ana García</p>
      <img 
        src="https://static.toiimg.com/thumb/msid-113979292,width-400,resizemode-4/113979292.jpg" 
        className="w-40 h-40 rounded-full object-cover" 
        alt="Ana García"
      />
    </div>

    {/* Miembro del equipo */}
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-bold mb-4">Luis Martínez</p>
      <img 
        src="https://static.toiimg.com/thumb/msid-113979292,width-400,resizemode-4/113979292.jpg" 
        className="w-40 h-40 rounded-full object-cover" 
        alt="Luis Martínez"
      />
    </div>

    {/* Miembro del equipo */}
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-bold mb-4">María López</p>
      <img 
        src="https://static.toiimg.com/thumb/msid-113979292,width-400,resizemode-4/113979292.jpg" 
        className="w-40 h-40 rounded-full object-cover" 
        alt="María López"
      />
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovación", description: "Buscamos constantemente nuevas formas de resolver problemas y mejorar." },
              { title: "Colaboración", description: "Creemos en el poder del trabajo en equipo y las alianzas estratégicas." },
              { title: "Excelencia", description: "Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos." },
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    )
}

export default page;