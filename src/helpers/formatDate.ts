export default function formatDate(date: Date): string {
  return date
    .toLocaleString('pt-BR', { month: 'long', year: 'numeric' })
    .toLocaleUpperCase();
}
