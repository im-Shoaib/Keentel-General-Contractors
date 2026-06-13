interface Props {
  params: Promise<{ area: string }>;
}

export default async function ServiceAreaPage({ params }: Props) {
  const { area } = await params;
  const areaName = area.charAt(0).toUpperCase() + area.slice(1);

  return (
    <div className="service-area-page">
      <section className="faq-hero" style={{ minHeight: "40vh" }}>
        <div className="faq-hero__inner">
          <h1 className="faq-hero__title">Service Area: {areaName}</h1>
          <p className="faq-hero__subtitle">
            Keentel General Contractors proudly serves {areaName} and surrounding communities.
          </p>
        </div>
      </section>
      <section className="faq-section">
        <div className="section__inner">
          <h2 className="section__title">Expert Construction Services in {areaName}</h2>
          <p className="section__text">
            Whether you need residential remodeling, commercial buildouts, or emergency repairs,
            our team is ready to help. Contact us today for a free estimate.
          </p>
          <div className="cta-section__buttons" style={{ marginTop: "2rem" }}>
            <a href="tel:8133950000" className="btn btn--primary">Call Now: 813-395-0000</a>
            <a href="/contact" className="btn btn--outline">Request a Quote</a>
          </div>
        </div>
      </section>
    </div>
  );
}