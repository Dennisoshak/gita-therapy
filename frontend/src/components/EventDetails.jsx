import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {  useAppSelector } from "../hooks/redux-hooks";
import { useTranslation } from "react-i18next";


const EventDetails = () => {
 
  const events = useAppSelector((state) => state.events);
  const formatDate=(d)=>{
  const date = (new Date(d))
   return (date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear())

  }
  const { t,i18n } = useTranslation();
  const direction = i18n.dir();

  
  
  return (
    <div className="event-details" style={{direction:direction}}>
      <Table sx={{minWidth:700}}  aria-label="simple table">
        <Thead>
          <Tr>
            <Th style={{width:"15%"}}>{t('situation')} </Th>
            <Th >{t('thoughts')}</Th>
            <Th >{t('emotions')}<div style={{fontSize:"12px"}}>(1-100)</div></Th>
            <Th >{t('reaction')}</Th>
            <Th>{t('time')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events[0] && events.map((event) => (
            <Tr
              key={event._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Td component="th" >
                {event.situation}
              </Td>
              <Td align="left">{event.thoughts}</Td>
              <Td align="left">{event.emotion}</Td>
              <Td align="left"> {event.reaction}</Td>
              <Td align="left">{formatDate(event.createdAt)}</Td>
              {/* <td align="left"> {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default EventDetails;


  