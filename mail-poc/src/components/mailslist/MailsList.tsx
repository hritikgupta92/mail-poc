// import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';  

import Mail from '../mail/Mail';
import { EmailType } from '../../store/mail-Slice';  

function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function MailsList() {
    const { emails, inboxVisible, starredVisible } = useSelector((state: RootState) => state.mail);

    return (
        <div className='mailList-container'>
            {emails.map((email: EmailType) => {
                if ((inboxVisible && email.labels.includes('Inbox')) ||
                    (starredVisible && email.labels.includes('Starred'))) {
                    return (
                        <Mail
                            key={email.id}
                            name={email.name}
                            subject={email.subject}
                            body={email.body}
                            timestamp={formatTimestamp(email.timestamp)}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default MailsList;
