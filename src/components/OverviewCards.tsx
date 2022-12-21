import { View, ViewStyle } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import formatCurrency from '../helpers/formatCurrency';

interface CardProps {
  style?: ViewStyle;
  title: string;
  icon: string;
  color: 'red' | 'green';
}

export default function OverviewCard({
  style = {},
  icon,
  title,
  color,
}: CardProps) {
  const LeftContent = props => (
    <Avatar.Icon
      {...props}
      icon={icon}
      color={color}
      style={{ backgroundColor: 'white' }}
    />
  );

  const RightContent = props => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Paragraph style={{ color }}>R$</Paragraph>
      <Paragraph style={{ color: 'black', marginLeft: 5 }}>{amount}</Paragraph>
    </View>
  );
  const fakeData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const amount = formatCurrency.format(1200).replace('R$', '');

  return (
    <Card
      style={{
        marginHorizontal: 10,
        ...style,
      }}
    >
      <Card.Title
        title={title}
        titleStyle={{ color: 'black' }}
        subtitleStyle={{ color: 'black' }}
        subtitle="Resumo"
        left={LeftContent}
        right={RightContent}
        rightStyle={{ marginRight: 10 }}
        style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
      />
      <Card.Content
        style={{
          marginTop: 5,
        }}
      >
        {fakeData.slice(0, 9).map((i, e) => (
          <Paragraph key={Math.random()} style={{ color: 'black' }}>
            Conta pra pagar
          </Paragraph>
        ))}
        {fakeData.length > 10 && (
          <Paragraph style={{ color: 'black' }}>...</Paragraph>
        )}
      </Card.Content>
      <Card.Actions>
        <Button>Ver Transações</Button>
      </Card.Actions>
    </Card>
  );
}
