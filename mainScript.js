document.getElementById('submitBtn').addEventListener("click", async (e) => {
        e.preventDefault();

        const payload = {
          userName: document.getElementById("userNameQuick").value.trim(),
          userEmail: document.getElementById("userEmailQuick").value.trim(),
          mobile: document.getElementById("phoneQuick").value.trim(),
          comments: document.getElementById("commentsQuick").value.trim(),
        };

        try {
          const response = await fetch("http://localhost:5000/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (response.ok) {
            // Fancy success alert
            await Swal.fire({
              icon: 'success',
              title: 'Thank you!',
              text: 'Your request has been submitted successfully.',
              confirmButtonColor: '#431e61'
            });
            window.location.reload();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: data.message || 'Something went wrong!',
            });
          }
        } catch (error) {
          console.error("Submission error:", error);
          alert("There was a problem submitting your request.");
        }
      });


