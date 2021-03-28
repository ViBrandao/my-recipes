import { Container } from './styles';
import { IDirection } from './../../interfaces/IDirections';
import { FormEvent, useState } from 'react';

interface DirectionsProps {
  directions: IDirection[];
  setDirections: (directions: IDirection[]) => void;
}

export function DirectionInput({ directions, setDirections }: DirectionsProps) {
  const [direction, setDirection] = useState('');

  function handleCreateNewDirections(event: FormEvent) {
    event.preventDefault();
    let newDirection: IDirection;
    newDirection = { step: directions.length + 1, description: direction };
    setDirections([...directions, newDirection]);
    setDirection('');
  }

  return (
    <Container>
      <strong>{directions.length + 1}</strong>
      <textarea
        value={direction}
        onChange={(event) => setDirection(event.target.value)}
        placeholder="Descreva esse passo"
      ></textarea>
      <button onClick={handleCreateNewDirections}>Adicionar</button>
    </Container>
  );
}
