export async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("error");
  }
}
