const Services = () => {
  const services = [
    {
      id: 1,
      title: "Abaya Designing",
      description: "Elegant and modern abayas with traditional Pakistani embroidery.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFiYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 2,
      title: "Evening Gowns",
      description: "Stunning evening wear with Pakistani traditional touch.",
      image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 3,
      title: "Custom Tailoring",
      description: "Bespoke tailoring services for perfect fit and style.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaWxvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 4,
      title: "Shalwar Kameez",
      description: "Traditional Pakistani outfits with modern designs.",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhbndhbiBrYW1lZXp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 5,
      title: "Pakistani Dresses",
      description: "Authentic Pakistani formal and casual wear.",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFraXN0YW5pJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 6,
      title: "Bridal Wear",
      description: "Exquisite Pakistani bridal dresses with detailed embroidery.",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZGFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 7,
      title: "Formal Wear",
      description: "Elegant formal dresses for special occasions.",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZGFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 8,
      title: "Embroidery Work",
      description: "Traditional Pakistani hand and machine embroidery.",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtYnJvaWRlcnklMjBwYXR0ZXJufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 9,
      title: "Designer Suits",
      description: "Custom designer suits with Pakistani aesthetics.",
      image: "https://images.unsplash.com/photo-1588850790165-5d517ead7873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 10,
      title: "Alterations",
      description: "Professional clothing alterations for perfect fit.",
      image: "https://images.unsplash.com/photo-1588850790165-5d517ead7873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a wide range of tailoring services with authentic Pakistani craftsmanship</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services