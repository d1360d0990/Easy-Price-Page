export default function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup__screen">
        <div className="scan-frame">
          <div className="scan-line" />
          <div className="barcode-preview">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="barcode-preview__bar"
                style={{ width: `${2 + (i % 5) * 3}px` }}
              />
            ))}
          </div>
        </div>
        <div className="price-tag">
          <span className="price-tag__label">Precio en la nube</span>
          <span className="price-tag__value">$ 1.299</span>
        </div>
      </div>
    </div>
  )
}
