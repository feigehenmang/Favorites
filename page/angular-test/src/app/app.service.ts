import { Injectable } from '@angular/core';
export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Phone: string;
    Position: string;
    Email: string;
    Address: string;
}

let employees: Employee[] = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Phone": "(213) 555-9392",
    "Position": "CEO",
    "Email": "jheart@dx-email.com",
    "Address": "351 S Hill St."
}, {
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Phone": "(310) 555-2728",
    "Position": "Sales Assistant",
    "Email": "oliviap@dx-email.com",
    "Address": "807 W Paseo Del Mar"
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Phone": "(818) 555-2387",
    "Position": "CMO",
    "Email": "robertr@dx-email.com",
    "Address": "4 Westmoreland Pl."
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Phone": "(818) 555-6546",
    "Position": "HR Manager",
    "Email": "gretas@dx-email.com",
    "Address": "1700 S Grandview Dr."
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Phone": "(626) 555-0358",
    "Position": "IT Manager",
    "Email": "brettw@dx-email.com",
    "Address": "1120 Old Mill Rd."
}, {
    "ID": 6,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Phone": "(562) 555-2082",
    "Position": "Controller",
    "Email": "sandraj@dx-email.com",
    "Address": "4600 N Virginia Rd."
}, {
    "ID": 7,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Phone": "(213) 555-2840",
    "Position": "Shipping Manager",
    "Email": "kevinc@dx-email.com",
    "Address": "424 N Main St."
}, {
    "ID": 8,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Phone": "(818) 555-6655",
    "Position": "HR Assistant",
    "Email": "cindys@dx-email.com",
    "Address": "2211 Bonita Dr."
}, {
    "ID": 9,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Phone": "(562) 555-9282",
    "Position": "Ombudsman",
    "Email": "kents@dx-email.com",
    "Address": "12100 Mora Dr"
}, {
    "ID": 10,
    "FirstName": "Taylor",
    "LastName": "Riley",
    "Phone": "(310) 555-7276",
    "Position": "Network Admin",
    "Email": "taylorr@dx-email.com",
    "Address": "7776 Torreyson Dr"
}];
export class Customer {
    Email: string;
    Password: string;
    Name: string;
    Date: Date;
    Country: string;
    City: string;
    Address: string;
    Phone: string;
    Accepted: boolean;
}

let customer : Customer = {
    "Email": "",
    "Password": "",
    "Name": "Peter",
    "Date": null,
    "Country": "",
    "City": "",
    "Address": "",
    "Phone": "",
    "Accepted": false
};

let countries: string[] = [
    'AfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistanAfghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The   Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burma','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombia','Comoros','Democratic Republic of the Congo','Republic of the Congo','Costa Rica','Ivory Coast','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Republic of Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','North Korea','South Korea','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Republic of Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Federated States of Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Namibia','Nauru','Nepal','Kingdom of the Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','State of Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];


let cities: string[] = [
    "New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Indianapolis", "Jacksonville", "San Francisco", "Columbus", "Charlotte", "Fort Worth", "Detroit", "El Paso", "Memphis", "Seattle", "Denver", "Washington", "Boston", "Nashville", "Baltimore", "Oklahoma City", "Louisville", "Portland", "Las Vegas", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Long Beach", "Kansas City", "Mesa", "Virginia Beach", "Atlanta", "Colorado Springs", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi", "Lexington", "Pittsburgh", "Anchorage", "Stockton", "Cincinnati", "Saint Paul", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Jersey City", "Chula Vista", "Fort Wayne", "Orlando", "St. Petersburg", "Chandler", "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Winston–Salem", "Glendale", "Garland", "Hialeah", "Reno", "Chesapeake", "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise", "Richmond"];


export class Task {
    subject: string;
    priority: string
}

let tasks: Task[] = [{
    subject: "Choose between PPO and HMO Health Plan",
    priority: "High"
}, {
    subject: "Non-Compete Agreements",
    priority: "Low"
}, {
    subject: "Comment on Revenue Projections",
    priority: "Normal"
}, {
    subject: "Sign Updated NDA",
    priority: "Urgent"
}, {
    subject: "Submit Questions Regarding New NDA",
    priority: "High"
}, {
    subject: "Rollout of New Website and Marketing Brochures",
    priority: "High"
}];



@Injectable()
export class Service {
    getCustomer() : Customer {
        return customer;
    }

    getCountries() {
        return countries;
    }

    getCities() {
        return cities;
    }
	
	 getEmployees() {
        return employees;
    }
    getTasks(): Task[] {
        return tasks;
    }
}
