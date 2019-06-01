<<<<<<< HEAD
/*
 * @Author: feigehenmang 
 * @Date: 2019-05-23 11:32:40 
 * @Last Modified by:    
 * @Last Modified time: 2019-05-23 11:32:40 
 */

import { Injectable } from '@angular/core';

export class Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: number;
    Phone: string;
    Fax: string;
    Website: string;
}

let customers: Customer[] = [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "null",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, {
    "ID": 6,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}, {
    "ID": 7,
    "CompanyName": "StereoShack",
    "Address": "400 Commerce S",
    "City": "Fort Worth",
    "State": "Texas",
    "Zipcode": 76102,
    "Phone": "(817) 820-0741",
    "Fax": "(817) 820-0742",
    "Website": "http://www.nowebsiteshack.com"
}, {
    "ID": 8,
    "CompanyName": "Circuit Town",
    "Address": "2200 Kensington Court",
    "City": "Oak Brook",
    "State": "Illinois",
    "Zipcode": 60523,
    "Phone": "(800) 955-2929",
    "Fax": "(800) 955-9392",
    "Website": "http://www.nowebsitecircuittown.com"
}, {
    "ID": 9,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 10,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 11,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 12,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}];

@Injectable()
export class Service {

    
    getCustomers() {
        return customers;
=======
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
>>>>>>> f8c84ba0839ce9f921a4892ebb70f746a9276b3d
    }
}
