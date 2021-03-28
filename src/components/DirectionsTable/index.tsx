import { IDirection } from '../../interfaces/IDirections';

interface DirectionsTableProps {
  directions: IDirection[];
}

export function DirectionsTable({ directions }: DirectionsTableProps) {
  return (
    <table>
      <tr>
        <th>Passo</th>
        <th>Descrição</th>
      </tr>
      {directions.map((direction) => {
        return (
          <tr>
            <td>{direction.step}</td>
            <td>{direction.description}</td>
          </tr>
        );
      })}
    </table>
  );
}
