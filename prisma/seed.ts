import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Seed Conference Rooms
  const room1 = await prisma.conferenceRoom.create({
    data: {
      number: 101,
      capacity: 50,
    },
  });

  const room2 = await prisma.conferenceRoom.create({
    data: {
      number: 102,
      capacity: 30,
    },
  });

  // Seed Reservations
  await prisma.reservation.createMany({
    data: [
      {
        roomNumber: room1.number,
        startDate: new Date('2024-02-01T10:00:00Z'),
        endDate: new Date('2024-02-01T12:00:00Z'),
        status: true,
      },
      {
        roomNumber: room2.number,
        startDate: new Date('2024-02-15T14:00:00Z'),
        endDate: new Date('2024-02-15T16:00:00Z'),
        status: true,
      },
    ],
  });

  // Seed Clients
  await prisma.client.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: 1234567890,
        reservationId: 1,
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phoneNumber: 9876543210,
        reservationId: 2,
      },
    ],
  });
  console.log('Seed data inserted successfully');
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });