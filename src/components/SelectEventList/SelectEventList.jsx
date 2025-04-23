import SelectEventItem from '../SelectEventItem/SelectEventItem';
import { useCartStore } from '../../store/useCartStore';
function SelectEventList() {
	const { tickets } = useCartStore();
	return (
		<ul className="event-selection__list">
			{Object.entries(tickets).map(([eventId, eventTickets]) => {
				// Använder första ticket infon som data för att de ör ju samma event på resterande tickets för det eventet
				const eventInfo = eventTickets[0];
				console.log(eventInfo);

				return (
					<SelectEventItem
						key={eventId}
						eventInfo={eventInfo}
						eventId={eventId}
						amount={tickets.length}
					/>
				);
			})}
		</ul>
	);
}

export default SelectEventList;
