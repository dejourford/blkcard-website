import transactionImg from "./src/assets/images/transaction-history.jpg"
import expenseImg from "./src/assets/images/expense-tracker.jpg"
import appleWatch from "./src/assets/images/applewatch-balance.jpg"
import tapToPay from "./src/assets/images/tap-to-pay.jpg"
import bitcoin from "./src/assets/images/bitcoin.jpg"

export default [
    {
        id: 1,
        title: ' Instant Balance Reflection',
        text: `Get your current balance as soon as a transaction 
        is completed. No more waiting for transactions to post before your actual balance is reflected`,
        img: transactionImg
    },

    {
        id: 2,
        title: 'Instant Transaction Tracker',
        text: `Access every transaction you've ever made 
        as a BLKcard holder. We never delete transaction history so you can have
        peace of mind and added security all the time`,
        img: expenseImg
    },
    {
        id: 3,
        title: 'Apple Watch Integration',
        text: `Seamlessley connect your BLKcard with your apple 
        watch for payments and transfers. You never have to carry your card 
        with you if you don't want to. Enjoy the freedom of banking with BLKcard`,
        img: appleWatch
    },
    {
        id: 4,
        title: 'Tap To Pay',
        text: `Enjoy the modern Tap To Pay integration that comes along with being 
        a member of BLKcard. Forget about the swiping from the 60's and get modern by 
        tapping to confirm payments`,
        img: tapToPay
    },
    {
        id: 5,
        title: 'Invest With Bitcoin',
        text: `Effortlessly invest money or withdraw from your bitcoin account by being a 
        BLKcard member. Investing for your future has never been easier`,
        img: bitcoin
    },

]