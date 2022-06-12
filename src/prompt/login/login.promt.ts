import { Bruno, Cris, Luana, Pedro } from "../../db/users";


const users = [Luana, Pedro, Bruno, Cris].map((user, i) => {
  return `\n ${i+1} - ${user.name} \n`
})

const login = [
  {
    type: "input",
    name: "option",
    message:
      `Escolha seu perfil para logar: ${users.join('')} ou digite 5 para sair.\n`,
  },
];


export { login };
