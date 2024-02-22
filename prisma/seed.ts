import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'thomas@gmail.com',
    firstname: 'thomas',
    lastname: 'dupont',
    password: bcrypt.hashSync('10alexandre10', 10),
    products: {
      create: [
        {
          title: 'Le sommeil féminin',
          description: 'Ses yeux fermés nous laissent facilement croire à son sommeil, mais dans cette apparence se trouve son réveil',
          url: 'https://cdn.pixabay.com/photo/2023/03/07/11/58/woman-7835587_1280.jpg',
          price: 3000.50
        }
      ]
    }
  },
  {
    email: 'lucie@gmail.com',
    firstname: 'lucie',
    lastname: 'martial',
    password: bcrypt.hashSync('10alexandre10', 10),
    products: {
      create: [
        {
          title: 'Cette rose de haut en bas',
          url: 'https://cdn.pixabay.com/photo/2023/12/02/11/21/flower-8425498_1280.jpg',
          description: 'Je suis prisonnier de la contemplation de mon oeuvre, je cherche les limites de son existence et je ne les vois pas',
          price: 200.50
        },
        {
          title: 'Le profil de la reine',
          url: 'https://cdn.pixabay.com/photo/2023/10/13/20/04/woman-8313469_1280.jpg',
          description: 'Elle semble être si sérieuse, ne cherchant notre regard et dénigrant nos yeux',
          price: 200.50
        },
       
      ]
    }
  },
  {
    email: 'moussa@gmail.com',
    firstname: 'moussa',
    lastname: 'dumbele',
    password: bcrypt.hashSync('10alexandre10', 10),
    products: {
      create: [
        {
          title: 'La femme aux lunettes rondes',
          url: 'https://cdn.pixabay.com/photo/2024/01/23/15/12/woman-8527770_1280.jpg',
          description: 'Son visage semblait être aussi beau que le soleil de ses verres',
          price: 200.50
        },
        {
          title: 'Un visage des plus étranges',
          url: 'https://cdn.pixabay.com/photo/2024/01/23/17/45/sunglasses-8527929_1280.jpg',
          description: 'Je ne sais si je vois un ou deux visages',
          price: 400.50
        },
        {
          title: 'La Star qui se voulait invisible',
          url: 'https://cdn.pixabay.com/photo/2024/01/23/15/12/woman-8527771_1280.jpg',
          description: 'En dépit de ses lunettes, sa bouche vendait le rêve',
          price: 500.50
        }

        
      ]
      
      
    }
  },
  {
    email: 'gabriel@gmail.com',
    firstname: 'gabriel',
    lastname: 'durand',
    password: bcrypt.hashSync('10alexandre10', 10),
    products: {
      create: [
        {
          title: 'La femme magnifique',
          description: 'La noirceur de sa peau était celle d\'un ange',
          url: 'https://cdn.pixabay.com/photo/2024/01/19/21/22/woman-8519922_1280.jpg',
          price: 2000.50
        },
        {
          title: 'La Plante de mes malheurs',
          description: 'Cachée dans cette obscurité qui me glace le sang',
          url: ' https://cdn.pixabay.com/photo/2024/01/06/20/13/strelitzia-8492027_1280.jpg',
          price: 1000.50
        }

       
      ]
    }
  },
  {
    email: 'tosso@gmail.com',
    firstname: 'tosso',
    lastname: 'ngondo',
    password: bcrypt.hashSync('10alexandre10', 10),
    products: {
      create: [
        {
          title: 'Le visage de Pompéi',
          description: 'Je ne saurais vous dire ce que je ressens là',
          price: 1000.50,
          url: 'https://cdn.pixabay.com/photo/2024/01/01/18/28/boho-8481946_1280.jpg'
        }
      ]
    }
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })