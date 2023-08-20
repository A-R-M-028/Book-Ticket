# Spread Operator

const ara = {
    name: 'ara',
    age: 1900
}

const student = {...ara, goodStudent: true};

Output: student -> all properties including goodStudent: true

# Alternative (Normal)

const ara = {
    name: 'ara',
    age: 1900
}

const student = ara;
student.goodStudent: true;

Output: student -> all properties including goodStudent: true

