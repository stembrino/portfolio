
let caminho = './assets/images/enterprises/'
export const EXPERIENCES = [
    {
        nomeEmpresa: 'Everis HPC',
        imagem: caminho+'everis.jpeg',   
        localidade: 'Lisboa',   
        cargo: 'Developer Frontend Internship',    
        programacao: ['Java', 'Javascript','Angular'],    
        descricao: ['Support the team with developing web pages', 'Understand routine and work methodology','Application documentation review using office tools'],    
        dataInicio: '02/09/2019',   
        dataTermino: '02/12/2019',
        area: 'programming'
    },
    {
        nomeEmpresa: 'MHC Empreendimentos',   
        localidade: 'Macaé, Rio de Janeiro',      
        cargo: 'Assistance Payment',    
        programacao: [],    
        descricao: ['Assist in payment activities related to project operations developed'],
        dataInicio: '01/02/2015',   
        dataTermino: '01/11/2017',
        area: 'business administration'
    },
    {
        nomeEmpresa: 'Lojas Americanas',   
        localidade: 'Rio de Janeiro',   
        imagem: caminho+'americanas.jpg',   
        cargo: 'Store Assistant',    
        programacao: [],    
        descricao: ['Support in store operations', 'Cashier', 'Activities of storeroom organization'],    
        dataInicio: '11/2013',   
        dataTermino: '08/2014',
        area: 'business administration'
    },
    {
        nomeEmpresa: 'Casa & Vídeo Ltda',   
        localidade: 'Rio de Janeiro',   
        imagem: caminho+'casavideo.png',   
        cargo: 'Backoffice Assistant',    
        programacao: [],    
        descricao: ['Monitoring of store activities', 'Preparation of weekly store performance reports'],    
        dataInicio: '09/2012',   
        dataTermino: '09/2013',
        area: 'business administration'
    },
    {
        nomeEmpresa: 'Nicomex Logística Ltda',   
        localidade: 'Rio de Janeiro',   
        imagem: caminho+'nicomex.png',   
        cargo: 'Account trainee',    
        programacao: [],    
        descricao: ['Data update in the accounting information system'],    
        dataInicio: '09/2012',   
        dataTermino: '09/2013',
        area: 'business administration'
    },
    

]

export const PROGRAMMING_LANGUAGES = [
    {
        nome: 'Angular',
        logo: 'angular',
        isFrameWork: true,
        nivel: 3
    },   
    {
        nome: 'NodeJs',
        logo: 'nodejs',
        isFrameWork: true,
        nivel: 3
    },
    {
        nome: 'Bootstrap',
        logo: 'bootstrap',
        isFrameWork: true,
        nivel: 4
    },
    {
        nome: 'PrimeFaces',
        logo: 'primefaces',
        isFrameWork: true,
        nivel: 3
    },
    {
        nome: 'CSS',
        logo: 'css',
        isFrameWork: false,
        nivel: 4
    },
    {
        nome: 'C/C++',
        logo: 'c++',
        isFrameWork: false,
        nivel: 1
    },
    {
        nome: 'C#',
        logo: 'csharp',
        isFrameWork: false,
        nivel: 3
    },
    {
        nome: 'Java',
        logo: 'java',
        isFrameWork: false,
        nivel: 3
    },
    {
        nome: 'JavaScript',
        logo: 'javascript',
        isFrameWork: false,
        nivel: 3
    },
    {
        nome: 'Jquery',
        logo: 'jquery',
        isFrameWork: false,
        nivel: 4
    },
    {
        nome: 'Ubuntu',
        logo: 'ubuntu',
        isFrameWork: false,
        nivel: 3
    },
    {
        nome: 'React-Native/React',
        logo: 'reactnative',
        isFrameWork: false,
        nivel: 3
    }
]

export const PROFILE = {
    nome: 'Fábio Ribeiro de Carvalho',
    descricao: 'I would like to work on Front End applications, but to do a good job, it is critical to know the full context of the application.',
    EXPERIENCES
}