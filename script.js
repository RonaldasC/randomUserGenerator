'use strict'

document.getElementById('clickMe').addEventListener('click', generate);
document.getElementById('clickYou').addEventListener('click', kiekReiks);

function randomDate(start, end) {
    return new Date(start.getFullYear() + Math.random() * (end.getTime() - start.getTime()));
};
function getRandomInt(value) {
  	return Math.floor(Math.random() * (value));
};
function generate(){
	const first_name = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Alexander", "Frank", "Patrick", "Raymond", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam", "Nathan", "Henry", "Douglas", "Zachary", "Peter", "Kyle", "Ethan", "Walter", "Noah", "Jeremy", "Christian", "Keith", "Roger", "Terry", "Gerald", "Harold", "Sean", "Austin", "Carl", "Arthur", "Lawrence", "Dylan", "Jesse", "Jordan", "Bryan", "Billy", "Joe", "Bruce", "Gabriel", "Logan", "Albert", "Willie", "Alan", "Juan", "Wayne", "Elijah", "Randy", "Roy", "Vincent", "Ralph", "Eugene", "Russell", "Bobby", "Mason", "Philip", "Louis","Mary", "Patricia", "Lori", "", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia", "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen", "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine", "Maria", "Heather", "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly", "Lauren", "Christina", "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline", "Martha", "Gloria", "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean", "Abigail", "Alice", "Julia", "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle", "Beverly", "Isabella", "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis", 
    "Lor"];
	const last_name = ["","","","Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzales", "Wilson", "Anderson", "Thomas", "Taylor", "English", "Moore", "Jackson", "English", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "English", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Spanish", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennet", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"];
    const countries = ["Poland","Afghanistan","Jamaica","Japan"]

	let name = first_name[getRandomInt(first_name.length)];
	const surname = last_name[getRandomInt(last_name.length)];
	const date = randomDate(new Date(2012, 0, 1), new Date());
    const country = countries[getRandomInt(countries.length)];

    // be if kartais pasitaiko empty string reikšmių if pagauna ir gražina random reiksmę
    // iš ~100 000 sugeneruotų vartotojų ~0,4% būdavo klaidingi
    // beveik visada pasitaikydavo klaida varduose 

    if(name === "") {
        return name;
    } if(surname === "") {
        return surname;
    } if(country === "") {
        return country;
    }

    document.getElementById("random_name").innerHTML = name;
    document.getElementById("random_surname").innerHTML = surname;
    document.getElementById("random_date").innerHTML = newDate();
    document.getElementById("random_country").innerHTML = country;

    function newDate() {
        const metai = date.getFullYear();
        const menuo = date.getMonth();
        const diena = date.getDate();
        return `${menuo + 1}-${diena + 1}-${metai + 1}`; 
    }
    console.log(`${name} ${surname}, ${newDate()}, ${country}`);
}

// sugeneruot 1000 000 užtruko 105381ms kas yra ~1,7 min
function kiekReiks() {
    let a = document.getElementById('kiekis').value;
    let i = 0;
        while (i < a) {
            generate();
            i++;
    }  
};