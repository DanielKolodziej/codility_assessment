function solution(T, R){
    let dict = {}
    //find first num index to remove string preceding
    let sub = T[0].search(/[0-9]/g)
    // modify T arr to just the group num
    for (let i = 0; i < T.length; i++){
        T[i] = T[i].substr(sub)
        if(T[i].search(/[a-z]/g) !== -1){
            T[i] = T[i].substr(0, T[i].search(/[a-z]/g))
        }
    }

    // combine the two arrays
    let zipped = T.map((e, i) => [e, R[i]])

    let total_groups = Math.max(...T)

    //check if key is in dictionary, if so append, else create
    for (let val in zipped){
        if (dict[zipped[val][0]]){
            dict[zipped[val][0]] = [...dict[zipped[val][0]],zipped[val][1]]
        } else {
            dict[zipped[val][0]] = [zipped[val][1]]
        }
    }
    count = total_groups
    //if dictionary contains any non 'OK' vals, dont count point
    for (let val in dict){
        if (dict[val].includes('Wrong answer') || dict[val].includes('Runtime error') || dict[val].includes('Time limit exceeded')){
            count--;
        }
    }
    return Math.floor(count * 100 / total_groups)
}
// let T = ['test1a', 'test2', 'test1b', 'test1c', 'test3']
// let R = ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']
let T = ['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a']
let R = ['Wrong answer', 'OK', 'OK', 'Runtime error', 'OK']
console.log(solution(T, R));