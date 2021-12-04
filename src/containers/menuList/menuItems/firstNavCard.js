import { IconUsers, IconFileLike } from '@tabler/icons';

const icons = { IconUsers, IconFileLike };

const firstNavCard = {
    id: 'firstNavCard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Клиенты',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'agencyAgreements',
            title: 'Агентские соглашения',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconFileLike,
            external: true,
            target: true
        }
    ]
};

export default firstNavCard;
