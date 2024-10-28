import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import Admin_Header_Nav_Bar from "../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar";
import { useUser } from "../../../../Context/AuthContext";
import ProfileEditForm from "../../Components/Profile_Edit_Component/ProfileEditForm";
import axios from "axios";
import { storage } from "../../../../config/firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Admin_Profile = () => {
    const { user } = useUser();
    
    const handleSaveProfile = async (updatedProfile, selectedFile) => {
        let profilePictureUrl = updatedProfile.profilepicture;

        if (selectedFile) {
            const storageRef = ref(storage, `profilePictures/${Date.now()}_${selectedFile.name}`);
            await uploadBytes(storageRef, selectedFile);
            profilePictureUrl = await getDownloadURL(storageRef);
        }

        const profileDataToSave = { ...updatedProfile, profilepicture: profilePictureUrl };

        try {
            const response = await axios.post("http://localhost:4000/profile-edit", profileDataToSave, { withCredentials: true });
            if (response.status === 200) alert("Profile updated successfully!");
            else alert("Failed to update profile");
        } catch (error) {
            console.error("Error updating profile:", error.response ? error.response.data : error.message);
            alert("Failed to update profile");
        }
    };

    return (
        <>
            <Admin_Header_Nav_Bar />
            <Admin_Side_NavBar />
            <ProfileEditForm profileData={user} onSave={handleSaveProfile} allowImageUpload />
        </>
    );
};

export default Admin_Profile;
