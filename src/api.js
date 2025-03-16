export async function getHello() {
  try {
    const response = await fetch("http://localhost:3000/");
    if (!response.ok) {
      throw new Error(`Błąd: ${response.statusText}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Błąd podczas pobierania danych z backendu:", error);
    return "Błąd połączenia z backendem";
  }
}
