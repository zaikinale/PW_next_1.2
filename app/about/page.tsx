// import Counter from "./Counter";

// // import { title } from "process"

// async function  getInfo() {
//     return {
//         title: 'О проекте',
//         description: 'Данные получены на сервере без useEffect.'
//     }   
// }


// export default async function AboutPage() {
//     const info = await getInfo();
//     return (
//         <main>
//             <h1>{info.title}</h1>
//             <p>{info.description}</p>
//             <Counter />
//         </main>
//     )
// }

export default function AboutPage() {
    return (
        <main>
            <h1>О нас</h1>
            <p>Мы изучаем Next.js.</p>
        </main>
    );
}