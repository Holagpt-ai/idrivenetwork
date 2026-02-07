export const INVENTORY = [
  { make: "BMW", model: "330i xDrive", year: 2024, price: 45990, fuelType: "Gasoline", transmission: "Automatic" },
  { make: "Mercedes-Benz", model: "GLC 300", year: 2023, price: 52450, fuelType: "Gasoline", transmission: "9G-Tronic" },
  { make: "Porsche", model: "911 Carrera", year: 2024, price: 118200, fuelType: "Gasoline", transmission: "PDK" },
  { make: "Tesla", model: "Model 3 Long Range", year: 2024, price: 41990, fuelType: "Electric", transmission: "Single-Speed" },
  { make: "Ford", model: "F-150 Lightning", year: 2024, price: 54995, fuelType: "Electric", transmission: "Single-Speed" },
  { make: "Audi", model: "Q5 Premium", year: 2023, price: 48900, fuelType: "Gasoline", transmission: "Automatic" },
  { make: "Lexus", model: "RX 350", year: 2024, price: 52350, fuelType: "Hybrid", transmission: "CVT" },
  { make: "Honda", model: "CR-V EX", year: 2023, price: 32900, fuelType: "Gasoline", transmission: "CVT" },
  { make: "Toyota", model: "Camry XSE", year: 2024, price: 35400, fuelType: "Gasoline", transmission: "Automatic" },
];

export function getInventoryText(): string {
  return INVENTORY.map(
    (c) => `${c.year} ${c.make} ${c.model} - $${c.price.toLocaleString()} (${c.fuelType}, ${c.transmission})`
  ).join("\n");
}
