import './MailsList.css'
import Mail from '../mail/Mail';


export interface EmailType {
    id: string;
    sender: string;
    name:string;
    subject: string;
    body: string;
    timestamp: string;
    read: boolean;
    starred: boolean;
    labels: ('Inbox' | 'Starred')[];
}

const emails: EmailType[] = [
    {
        "id": "1",
        "sender": "john.doe@example.com",
        "name": "John Doe",
        "subject": "Meeting Tomorrow",
        "body": "Hi, just a reminder that we have a meeting scheduled for tomorrow at 10:00 AM. Please make sure to prepare the presentation.",
        "timestamp": "2024-05-06T08:30:00",
        "read": true,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "2",
        "sender": "news@example.com",
        "name": "News",
        "subject": "Daily News Digest",
        "body": "Here's your daily news digest:\n- Headline 1\n- Headline 2\n- Headline 3",
        "timestamp": "2024-05-06T07:00:00",
        "read": false,
        "starred": true,
        "labels": [
            "Starred"
        ]
    },
    {
        "id": "3",
        "sender": "alice@example.com",
        "name": "Alice Smith",
        "subject": "Project Update",
        "body": "Hey, just wanted to give you a quick update on our project progress. Everything is going smoothly so far.",
        "timestamp": "2024-05-06T11:45:00",
        "read": true,
        "starred": true,
        "labels": [
            "Inbox",
            "Starred"
        ]
    },
    {
        "id": "4",
        "sender": "marketing@example.com",
        "name": "Marketing Team",
        "subject": "New Product Launch",
        "body": "We're excited to announce the launch of our new product! Check it out on our website.",
        "timestamp": "2024-05-07T09:20:00",
        "read": false,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "5",
        "sender": "support@example.com",
        "name": "Support Team",
        "subject": "Customer Query",
        "body": "A customer has submitted a query regarding their recent purchase. Can you please assist?",
        "timestamp": "2024-05-07T13:55:00",
        "read": true,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "6",
        "sender": "finance@example.com",
        "name": "Finance Department",
        "subject": "Expense Report",
        "body": "Please find attached the expense report for the previous month. Let me know if you need any further details.",
        "timestamp": "2024-05-07T16:30:00",
        "read": false,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "7",
        "sender": "social@example.com",
        "name": "Social Media Team",
        "subject": "Social Media Campaign",
        "body": "Our latest social media campaign is live! Check out the engagement metrics.",
        "timestamp": "2024-05-08T10:10:00",
        "read": false,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "8",
        "sender": "events@example.com",
        "name": "Events Team",
        "subject": "Upcoming Event",
        "body": "Don't forget about the upcoming event next week. Make sure you're prepared!",
        "timestamp": "2024-05-08T14:45:00",
        "read": true,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "9",
        "sender": "hr@example.com",
        "name": "HR Department",
        "subject": "Employee Feedback",
        "body": "We're collecting feedback from employees regarding the recent policy changes. Please participate.",
        "timestamp": "2024-05-08T16:20:00",
        "read": false,
        "starred": false,
        "labels": [
            "Inbox"
        ]
    },
    {
        "id": "10",
        "sender": "noreply@example.com",
        "name": "No Reply",
        "subject": "Account Notification",
        "body": "Your account password has been reset. If you did not request this change, please contact support immediately.",
        "timestamp": "2024-05-08T17:55:00",
        "read": true,
        "starred": true,
        "labels": [
            "Starred"
        ]
    }
];


function formatTimestamp(timestamp:string) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function MailsList() {
    return (
        <div className='mailList-container'>
            {emails.map((email:EmailType) => (
                <Mail name={email.name} subject={email.subject} body={email.body} timestamp={formatTimestamp(email.timestamp)} />
            ))}
        </div>
    );
}

export default MailsList;
