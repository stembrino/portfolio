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
                    label: 'Do You Know?',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'Do You Know?']
                },
                {
                    label: 'Passaro Urbano',
                    icon: 'pi pi-fw pi-external-link',
                    routerLink: ['/cards', 'Passaro Urbano']
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
    
