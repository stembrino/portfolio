export let CONTENT_SIDEBAR = [
        {
            label: 'All Projects',
            command: (event: any) => {},
            icon: 'pi pi-fw pi-th-large',
            routerLink: ['/cards']

                        
        },    
        {
            label: 'Angular',
            items: [               
                {
                    label: 'Insta Clone',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'Insta Clone']
                },
                {
                    label: 'PortfolioApp',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'PortfolioApp']
                },
                {
                    label: 'MasterMind',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'MasterMind']
                }
            ]
    
                        
        },
        {
            label: 'NodeJs',
            items: [
                {
                    label: 'List Mind',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'List Mind']
                },                
            ]
        },
        {
            label: 'C#',
            items: [
                {
                    label: 'Beer Store',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'Beer Store']                   
                    
                },                
            ]
        }
];
    
