using System;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace praktikuli_13
{
    public partial class Form1 : Form
    {
        private string connectionString = "server=DESKTOP-SS48TE\\SERV159; database=Shekveta; Integrated Security=SSPI";

        public Form1()
        {   
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string query = "SELECT COUNT(*) FROM Shemkveti WHERE qalaqi = N'თბილისი'";
            ExecuteScalarQuery(query, label1);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string query = "SELECT COUNT(*) FROM Xelshekruleba WHERE gadasaxdeli_l > 3000";
            ExecuteScalarQuery(query, label2);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            string query = "SELECT AVG(xelfasi) FROM Personali";
            ExecuteScalarQuery(query, label3);
        }

        private void ExecuteScalarQuery(string query, Label label)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    connection.Open();
                    object result = command.ExecuteScalar();
                    label.Text = result.ToString();
                }
            }
        }
    }
}
