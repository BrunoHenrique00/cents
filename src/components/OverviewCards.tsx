import { useNavigation } from '@react-navigation/native';
import { View, ViewStyle } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import formatCurrency from '../helpers/formatCurrency';
import { IBillDetails } from '../types/bill';
interface CardProps {
  style?: ViewStyle;
  title: string;
  icon: string;
  color: 'red' | 'green';
  bills: IBillDetails[];
}

export default function OverviewCard({
  style = {},
  icon,
  title,
  color,
  bills,
}: CardProps) {
  const total = formatCurrency.format(
    bills.reduce((acc, bill) => acc + parseInt(bill.value), 0),
  );
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
      <Paragraph style={{ color: 'black', marginLeft: 5 }}>{total}</Paragraph>
    </View>
  );

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
        {bills?.slice(0, 9).map(item => (
          <Paragraph key={Math.random()} style={{ color: 'black' }}>
            {`${item.description} ${formatCurrency.format(
              parseInt(item.value, 10),
            )}`}
          </Paragraph>
        ))}
        {bills.length > 10 && (
          <Paragraph style={{ color: 'black' }}>...</Paragraph>
        )}
      </Card.Content>
    </Card>
  );
}
