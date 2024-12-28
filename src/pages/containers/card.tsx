import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@chakra-ui/react";
import { Rating } from "@mui/material";

interface CardProps {
    title: string;
    description: string;
}

const CardsContainer = ({ title, description }: CardProps) => {
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Avatar
                    src="https://picsum.photos/200/300"
                    name="Nue Camp"
                    size="lg"
                    shape="rounded"
                />
                <Rating defaultValue={3} size="small" />
                <Card.Title mt="2">{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
    )
}
export default CardsContainer;
