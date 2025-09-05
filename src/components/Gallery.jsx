const Gallery = () => {
  const galleryItems = [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFiYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaWxvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhaWxvcmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhbndhbiBrYW1lZXp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFraXN0YW5pJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZGFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtYnJvaWRlcnklMjB3b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1588850790165-5d517ead7873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1588850790165-5d517ead7873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <p>Browse through our collection of beautifully tailored garments</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item} alt={`Design ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery