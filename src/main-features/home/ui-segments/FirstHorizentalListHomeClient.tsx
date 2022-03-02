import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";
import Avatar from "@mui/material/Avatar/Avatar";
import styled from "@mui/material/styles/styled";
import Paper from "@mui/material/Paper/Paper";
import {getBaseImageUrl} from "../../../shared/utils/utils-functions";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface ICategory {
    img: string;
    title: string;
}

export default function FirstHorizentalListHomeClient() {

    const listCategories = [
        {
            img: getBaseImageUrl('/assets/images/home/categories/home.png'),
            title: 'home_furniture',
        },
        {
            img: getBaseImageUrl('/assets/images/home/categories/cars.png'),
            title: 'cars',
        },
        {
            img: getBaseImageUrl('/assets/images/home/categories/phones.png'),
            title: 'phones',
        },
        {
            img: getBaseImageUrl('/assets/images/home/categories/services.png'),
            title: 'services',
        },
        {
            img: getBaseImageUrl('/assets/images/home/categories/search.png'),
            title: 'search',
        },
    ];

    return (
        <Container maxWidth="xl">
            <Stack
                sx={{
                    my: '4rem',
                    px: { xs: 0, md: 2 },
                    justifyContent: 'center',
                }}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {listCategories.map((category: any, index: number) => (
                    <Item
                        sx={{
                            flex: 1,
                        }}
                        key={`category-${index}`}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={category.img}
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        />
                        <h3 className="mt-2">{category.title}</h3>
                    </Item>
                ))}
            </Stack>
        </Container>
    )
}