import axios from 'axios'

const API_URL = "https://xtikxqftunpveaqpnlcs.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aWt4cWZ0dW5wdmVhcXBubGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDUwMDgsImV4cCI6MjA5NjUyMTAwOH0.1z5fp_GuOsbZ8x8uw27lEBdR1AmgYTxznwVKh0SiIic"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}