import _ from 'lodash'

function test() {
    const element = document.createElement('div')
    
    element.innerHTML = _.join(['Hello', 'Jedis'], ' ')

    return element
}

document.body.appendChild(test())