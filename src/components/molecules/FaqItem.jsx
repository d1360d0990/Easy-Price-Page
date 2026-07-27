export default function FaqItem({ question, answer }) {
  return (
    <details className="faq__item">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  )
}
