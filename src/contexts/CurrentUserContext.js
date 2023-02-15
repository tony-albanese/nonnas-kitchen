export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
            const { data } = await axios.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);
};