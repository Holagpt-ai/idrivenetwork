import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.deleteMany();
  await prisma.car.createMany({
    data: [
      {
        make: "BMW",
        model: "330i xDrive",
        year: 2024,
        price: 45990,
        mileage: 8200,
        transmission: "Automatic",
        fuelType: "Gasoline",
        imageUrl: "",
        isFeatured: true,
      },
      {
        make: "Mercedes-Benz",
        model: "GLC 300",
        year: 2023,
        price: 52450,
        mileage: 14500,
        transmission: "9G-Tronic",
        fuelType: "Gasoline",
        imageUrl: "",
        isFeatured: true,
      },
      {
        make: "Porsche",
        model: "911 Carrera",
        year: 2024,
        price: 118200,
        mileage: 2100,
        transmission: "PDK",
        fuelType: "Gasoline",
        imageUrl: "",
        isFeatured: true,
      },
      {
        make: "Tesla",
        model: "Model 3 Long Range",
        year: 2024,
        price: 41990,
        mileage: 4800,
        transmission: "Single-Speed",
        fuelType: "Electric",
        imageUrl: "",
        isFeatured: false,
      },
      {
        make: "Ford",
        model: "F-150 Lightning",
        year: 2024,
        price: 54995,
        mileage: 1200,
        transmission: "Single-Speed",
        fuelType: "Electric",
        imageUrl: "",
        isFeatured: true,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
