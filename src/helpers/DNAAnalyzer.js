const DNAAnalyzer = module.exports;

const mutantPattern = ["AAAA", "TTTT", "CCCC", "GGGG"]

DNAAnalyzer.isMutant = (sequence) => {

    if (horizontal(sequence) || vertical(sequence) || diagonal(sequence)){
        return true
    }

    return false
}


function vertical(matrix) {
    for (let j = 0 ; j < matrix[0].length ; j++) {

        let sequence = '';

        for (let i = 0 ; i < matrix.length ; i++) {
            sequence += matrix[i][j];
        }

        const result = mutantPattern.map(xgen => sequence.includes(xgen)) 
        
        if (result.includes(true)){
            return true
        }
    }
    return false;
}

function horizontal(matrix) {
    for (let j = 0 ; j < matrix[0].length ; j++) {

        let sequence = '';

        for (let i = 0 ; i < matrix.length ; i++) {
            sequence += matrix[i][j];
        }

        const result = mutantPattern.map(xgen => sequence.includes(xgen))
        
        if (result.includes(true)){
            return true
        }
    }
    return false;
}

function rightDiagonal(matrix){
    let sequence = '';

    for(let j = 0; j < matrix.length; j ++){
        for(let i = 0; i < matrix.length; i++){
            if(i+j >= matrix.length)
                break   ;
            sequence += matrix[i].charAt(i+j);
        }
        let result = mutantPattern.map(xgen => sequence.includes(xgen))

        if (result.includes(true)){
            return true
        }
    }

    for(let j = 1; j < matrix.length; j ++){
        for(let i = 0; i < matrix.length; i++){
            if(i+j >= matrix.length)
                break;
            sequence += matrix[i + j].charAt(i);
        }
        let result = mutantPattern.map(xgen => sequence.includes(xgen))
       
        if (result.includes(true)){
            return true
        }
    }

    return false
}

function leftDiagonal(matrix){
    let sequence = '';
    
    for(let j = 0; j < matrix.length; j++){
        for(let i = j; i >= 0; i--){
            sequence += matrix[j - i].charAt(i);
        }
        let result = mutantPattern.map(xgen => sequence.includes(xgen))

        if (result.includes(true)){
            return true
        }
    }

    for(let j = 1; j < matrix.length; j ++){
        for(let i = j; i < matrix.length; i++){
            sequence += matrix[matrix.length - i + j - 1].charAt(i);
        }
        let result = mutantPattern.map(xgen => sequence.includes(xgen))

        if (result.includes(true)){
            return true
        }
    }

    return false
}


function diagonal (matrix) { 
    return rightDiagonal(matrix) || leftDiagonal(matrix) 
}