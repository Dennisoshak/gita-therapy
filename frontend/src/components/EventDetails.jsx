import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {  useAppSelector } from "../hooks/redux-hooks";
import { useTranslation } from "react-i18next";


import { useEffect, useState } from 'react';

const EventDetails = () => {
  const [loading, setLoading] = useState(true);
  const events = useAppSelector((state) => state.events);

  useEffect(() => {
    // Simulate loading for demonstration; replace with real async logic
    if (events !== undefined) {
      setLoading(false);
    }
  }, [events]);
  const formatDate=(d)=>{
  const date = (new Date(d))
   return (date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear())

  }
  const { t,i18n } = useTranslation();
  const direction = i18n.dir();

  
  
  return (
    <div className="event-details" style={{direction:direction}}>
      {loading ? (
        <div className="events-skeleton">
          <div className="skeleton-row">
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'20%'}} />
          </div>
          <div className="skeleton-row">
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'20%'}} />
          </div>
          <div className="skeleton-row">
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'15%'}} />
            <div className="skeleton-cell" style={{width:'25%'}} />
            <div className="skeleton-cell" style={{width:'20%'}} />
          </div>
        </div>
      ) : (!events || events.length === 0) ? (
        <div className="events-empty-state">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="56" rx="24" ry="4" fill="#f7f6fa"/>
            <rect x="14" y="20" width="36" height="22" rx="5" fill="#e6e6fa"/>
            <rect x="20" y="26" width="24" height="3" rx="1.5" fill="#b39ddb"/>
            <rect x="20" y="32" width="18" height="3" rx="1.5" fill="#d1c4e9"/>
            <rect x="20" y="38" width="10" height="3" rx="1.5" fill="#ede7f6"/>
            <circle cx="32" cy="14" r="6" fill="#a14a59"/>
          </svg>
          {t('No events yet. Add your first event!')}
        </div>
      ) : (
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
            {events.map((event) => (
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
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default EventDetails;


  // <h4>{event.title}</h4>
  //     <p>
  //       <strong>Load (kg): </strong>
  //       {event.load}
  //     </p>
  //     <p>
  //       <strong>Reps: </strong>
  //       {event.reps}
  //     </p>
  //     <p>
  //       {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
  //     </p>
  //     <span className="material-symbols-outlined" onClick={handleClick}>
  //       delete
  //     </span>
      