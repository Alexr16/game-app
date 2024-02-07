import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      borderRadius={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }}
      overflow="hidden"
      padding="10px"
    >
      <Image src={game.backgroung_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
