let employees = [
    {
        id: 1,
        firstName: "Amy",
        lastName: "Taylor",
        title: "CEO",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "amy@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
        id: 2,
        firstName: "Anup",
        lastName: "Gupta",
        title: "VP of Engineering",
        managerId: 1,
        managerName: "Amy Taylor",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "anup@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    },
    {
        id: 3,
        firstName: "Michael",
        lastName: "Jones",
        title: "VP of Marketing",
        managerId: 1,
        managerName: "Amy Taylor",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "michael@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        id: 4,
        firstName: "Caroline",
        lastName: "Kingsley",
        title: "VP of Sales",
        managerId: 1,
        managerName: "Amy Taylor",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "caroline@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        id: 5,
        firstName: "James",
        lastName: "Kennedy",
        title: "Account Executive",
        managerId: 4,
        managerName: "Caroline Kingsley",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "james@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg"
    },
    {
        id: 6,
        firstName: "Jennifer",
        lastName: "Wu",
        title: "Marketing Specialist",
        managerId: 3,
        managerName: "Michael Jones",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "jen@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        id: 7,
        firstName: "Jonathan",
        lastName: "Bradley",
        title: "Account Executive",
        managerId: 4,
        managerName: "Caroline Kingsley",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "jonathan@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        id: 8,
        firstName: "Kenneth",
        lastName: "Sato",
        title: "Account Executive",
        managerId: 4,
        managerName: "Caroline Kingsley",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "kenneth@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
    },
    {
        id: 9,
        firstName: "Lisa",
        lastName: "Parker",
        title: "Software Architect",
        managerId: 2,
        managerName: "Anup Gupta",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "lisa@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/lisa_parker.jpg"
    },
    {
        id: 10,
        firstName: "Brad",
        lastName: "Moretti",
        title: "Software Architect",
        managerId: 2,
        managerName: "Anup Gupta",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "brad@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/brad_moretti.jpg"
    },
    {
        id: 11,
        firstName: "Michelle",
        lastName: "Lambert",
        title: "Software Architect",
        managerId: 2,
        managerName: "Anup Gupta",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "michelle@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
        id: 12,
        firstName: "Miriam",
        lastName: "Aupont",
        title: "Marketing Manager",
        managerId: 3,
        managerName: "Michael Jones",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "miriam@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
        id: 13,
        firstName: "Olivia",
        lastName: "Green",
        title: "Marketing Manager",
        managerId: 3,
        managerName: "Michael Jones",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "olivia@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
        id: 14,
        firstName: "Robert",
        lastName: "Sullivan",
        title: "Marketing Manager",
        managerId: 3,
        managerName: "Michael Jones",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "robert@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/robert_sullivan.jpg"
    },
    {
        id: 15,
        firstName: "Tammy",
        lastName: "Robinson",
        title: "Software Architect",
        managerId: 2,
        managerName: "Anup Gupta",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "tammy@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/tammy_robinson.jpg"
    },
    {
        id: 16,
        firstName: "Victor",
        lastName: "Ochoa",
        title: "Marketing Specialist",
        managerId: 3,
        managerName: "Michael Jones",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "victor@chart.org",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    }
];

// Simulating async calls for plug-and-play replacement with REST services
export let findAll = () => new Promise((resolve, reject) => {
    resolve(employees);
});

export let findByName = (name) => new Promise((resolve, reject) => {
    let filtered = employees.filter(employee => (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1);
    resolve(filtered);
});

export let findById = (id) => new Promise((resolve, reject) => {
    let employee = employees[id-1];
    resolve({
        firstName: employee.firstName,
        lastName: employee.lastName,
        title: employee.title,
        email: employee.email,
        mobilePhone: employee.mobilePhone,
        picture: employee.picture,
        manager: employees[employee.managerId - 1],
        reports: employees.filter(item => item.managerId === id)
    });
});