// assets
import { IconKey, IconFileAnalytics, IconMessages, IconUserCheck, IconBook, IconNotebook, IconFileReport } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconFileAnalytics,
    IconMessages,
    IconUserCheck,
    IconBook,
    IconNotebook,
    IconFileReport
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const secondNavCard = {
    id: 'secondNavCard',
    type: 'group',
    children: [
        {
            id: 'contracts',
            title: 'Договоры',
            type: 'collapse',
            icon: icons.IconFileAnalytics,

            children: [
                {
                    id: 'loanAgreements',
                    title: 'Договора займа (P2P)',
                    type: 'item',
                    url: '/contracts/loan-agreements',
                    target: false
                },
                {
                    id: 'bondIssue',
                    title: 'Эмиссии облигаций',
                    type: 'item',
                    url: '/contracts/bond-issue',
                    target: false
                },
                {
                    id: 'bondAgreements',
                    title: 'Договора по облигациям',
                    type: 'item',
                    url: '/contracts/bond-agreements',
                    target: false
                }
            ]
        },
        {
            id: 'postings',
            title: 'Проводки',
            type: 'collapse',
            icon: icons.IconMessages,

            children: [
                {
                    id: 'login1',
                    title: 'В разработке',
                    type: 'item',
                    url: '/postings',
                    target: false
                }
            ]
        },
        {
            id: 'administration',
            title: 'Администрирование',
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'login1',
                    title: 'В разработке',
                    type: 'item',
                    url: '/administration',
                    target: false
                }
            ]
        },
        {
            id: 'handbook',
            title: 'Справочники',
            type: 'collapse',
            icon: icons.IconBook,

            children: [
                {
                    id: 'login1',
                    title: 'В разработке',
                    type: 'item',
                    url: '/handbook',
                    target: false
                }
            ]
        },
        {
            id: 'accounting-core',
            title: 'Учетное ядро',
            type: 'collapse',
            icon: icons.IconNotebook,

            children: [
                {
                    id: 'login1',
                    title: 'В разработке',
                    type: 'item',
                    url: '/accounting-core',
                    target: false
                }
            ]
        },
        {
            id: 'reports',
            title: 'Отчеты',
            type: 'collapse',
            icon: icons.IconFileReport,

            children: [
                {
                    id: 'login1',
                    title: 'В разработке',
                    type: 'item',
                    url: '/reports',
                    target: false
                }
            ]
        }
    ]
};

export default secondNavCard;
