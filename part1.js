//promises

// console.log('Person 1: Shows Ticket');
// console.log('Person 2: Shows Ticket');
// const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn =promiseWifeBringingTicks.then((t) => {
//     console.log('Wife: i have the ticks')
//     console.log(`Husband: we should go in` );
//     console.log('Wife no i am hungry');
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// });
// const getButter = getPopcorn.then((t)=> {
//     console.log('Husband: I got some popcorn');
//     console.log('Husband: we should go in');
//     console.log('Wife: I need butter on my popcorn');
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// });
// getButter.then((t)=> console.log(t)) 
// console.log('Person 4: Shows Ticket');
// console.log('Person 5: Shows Ticket');


// async await

console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');
const preMovie = async () => {
    const promiseWifeBringing = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopCorn = new Promise((resolve,reject) => resolve('Popcorn'));
    
    const getCandy = new Promise((resolve,reject) => resolve('candy'))
    
    const getCake = new Promise((resolve,reject) => resolve('cake'))
    
    const addButter = new Promise((resolve,reject) => resolve('Butter'))
    const getColdDrinks = new Promise((resolve,reject) => resolve('Colddrinks'))
    
    let ticket = await promiseWifeBringing;
        console.log(`Wife: i have the ${ticket}`)
        console.log(`Husband: we should go in` );
        console.log('Wife: no i am hungry');
    let popcorn = await getPopCorn;
        console.log(`Husband: I got some ${popcorn}`);
        console.log('Husband: we should go in');
        console.log('Wife: I need butter on my popcorn');
    let butter =await addButter;
        console.log(`Husband: I got some ${butter} on popcorn`);
        console.log('Husband: anything else darling');
        console.log('wife: can we get some colddrinks too')
    let colddrinks =await getColdDrinks;
        console.log(`Husband: I got some ${colddrinks} too`);
        console.log('Husband: anything else darling');
        console.log('Wife: lets go we are getting late')
        console.log('husband: Thank you for the reminder')    
    return ticket;
}
preMovie().then((m) => console.log(`Person 3: shows ${m}`));

console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');

// create post and delete post using async await

// async function creatingPost() {
//     await createPost({title: 'Post Three'})
//     getPosts();
// }

// creatingPost();
 
// async function deletingPost(){
//     await postMessage.pop();
//     getPosts();
// }

// deletingPost();